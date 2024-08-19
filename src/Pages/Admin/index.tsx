import { LimitSection } from "../../Styles/style";
import { HeaderPageAdmin } from "./HeaderAdmin"
import TableAutor from "./Tables/TableAutors";
import TableBooks from "./Tables/TableBooks";
import { TablePublishers } from "./Tables/TablePublishers";





export const PageAdmin = () => {
    return(
        <>
            <HeaderPageAdmin/>
            <LimitSection>
            <TableAutor />
            <TableBooks />
            <TablePublishers/>

            </LimitSection>
        </>
    );
}