<script>
const axios = require("axios");

export default {
  name: "repeat-customer-subscription",
  template: "#repeat-customer-subscription",
  props: {
    customerId: {
      type: String,
      required: true,
    },
    limit: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      upcoming_date: "",
      subscription_ids: [],
      subscription_products: [],
    };
  },
  methods: {},
  computed: {
    products() {
      return this.subscription_products.slice(0, parseInt(this.limit));
    },
    total_subscription_price() {
      return parseFloat(
        this.subscription_products.reduce(
          (total, obj) => obj.price * obj.quantity + total,
          0
        )
      ).toFixed(2);
    },
  },
  mounted() {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    axios
      .get(
        `https://bit-hive.herokuapp.com/customers/${this.customerId}/subscriptions?status=active`
      )
      .then((response) => {
        let subscriptions = response.data;
        // sometimes it'll return an error as a string, so we needed to account for that and also that there are subscriptions to loop through
        if (typeof subscriptions !== "string" && subscriptions.length > 0) {
            // cool little function that returns the item with the closest date to today based on the next_charge_scheduled_at key
          const findClosest = (data, accessor, target = Date.now()) =>
              data.reduce((prev, curr) => {
                let a = Math.abs(accessor(curr).getTime() - target);
                let b = Math.abs(accessor(prev).getTime() - target);
                return a - b < 0 ? curr : prev;
              }),
            acc = (obj) => new Date(obj.next_charge_scheduled_at);

          const resData = findClosest(subscriptions, acc);

          let closest_array = subscriptions.filter(
            (e) => e.next_charge_scheduled_at == resData.next_charge_scheduled_at
          );

          closest_array.forEach((subscription) => {
            let date = new Date(subscription.next_charge_scheduled_at);
            let month = monthNames[date.getMonth()];
            let day = date.getDate();

            this.upcoming_date = `${month} ${day}`;

            let img_url = subscription.shopify_product_image_url.split(
              ".jpg?"
            )[0];

            this.subscription_ids.push(subscription.id);
            this.subscription_products.push({
              handle: `/tools/recurring/login/`,
              image_url: `${img_url}_200x200.jpg`,
              quantity: subscription.quantity,
              price: subscription.price,
              product_id: subscription.shopify_product_id,
              variant_id: subscription.shopify_variant_id,
            });
          });
        }
      });
  },
};
</script>
