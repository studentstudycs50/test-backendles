import React from 'react'
import TabsStyled from "./TabsStyled";

const DummyTable = () => {
    return(
        <TabsStyled>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Dummy</td>
                        <td>Table</td>
                    </tr>
                </tbody>
        </table>
        </TabsStyled>
    )
}

export default DummyTable;
