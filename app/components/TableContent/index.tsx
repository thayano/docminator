import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export const TableContent = () => {
    const infoTable = [
        {
            url: `lxtex.com.br`,
            title: `Lxtex`,
            portainer: `lxtex.com`,
            banco: `lxtex.com`,
        },
    ]

    return (
        <div className="p-6">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">DESCRICAO</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead>PORTAINER</TableHead>
                        <TableHead className="">BANCO </TableHead>
                        <TableHead>SSH</TableHead>
                        <TableHead>PORTA</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">pmrmoura</TableCell>
                        <TableCell>https://www.google.com/</TableCell>
                        <TableCell>https://www.google.com:9001</TableCell>
                        <TableCell className="">https://www.google.com:9001</TableCell>
                        <TableCell className="">195.453.232.12</TableCell>
                        <TableCell className="">4302</TableCell>

                        
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}