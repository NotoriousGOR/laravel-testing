import React from "react";

export default function Table(props) {
    return (
        <>
            <table>
                <thead>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                </thead>
                <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Megha</td>
                    <td>19</td>
                    <td>Female</td>
                </tr>
                <tr>
                    <td>Subham</td>
                    <td>25</td>
                    <td>Male</td>
                </tr>
            </table>
        </>
    );
}
