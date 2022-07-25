import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Table from "../Components/Tables/Table";

export default function Welcome() {
    return (
        <>
            <Head title="U.S. States" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    <>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </>
                </div>

                <div className="w-6xl mx-auto sm:px-6 lg:px-8">
                    <Table />
                </div>
            </div>
        </>
    );
}
