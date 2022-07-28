import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Table from "../Components/Tables/Table";
import Switch from "../Components/Switch";

const Welcome = () => {
    return (
        <>
            <Head title="U.S. States" />
            <div
                className={`relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0`}
            >
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    <>
                        <Switch />
                    </>
                </div>
                <div className="w-1/2 max-h-128 min-h-96 sm:px-6 lg:px-8 overflow-auto">
                    <Table />
                </div>
            </div>
        </>
    );
};

export default Welcome;
