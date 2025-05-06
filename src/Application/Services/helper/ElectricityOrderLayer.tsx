import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "../../../components/ui/table";
  import Badge from '../../../components/ui/badge/Badge';
  
  // Define interface for table data
  interface Order {
    dateTime: string;
    product: string;
    account: string;
    amount: number;
    status: string;
    vendorId: string;
    operatorId: string;
  }
  

function ElectricityOrderLayer() {
    // Data for the "Latest Orders" table
const orders: Order[] = [
    { dateTime: "23-Aug-2024", product: "Verify Money Transfer Account", account: "aaa", amount: 10.00, status: "Success", vendorId: "RT001696", operatorId: "110" },
    { dateTime: "23-Aug-2024", product: "Verify Money Transfer Account", account: "aaa", amount: 10.00, status: "Success", vendorId: "RT001696", operatorId: "110" },
    { dateTime: "23-Aug-2024", product: "Verify Money Transfer Account", account: "aaa", amount: 0.00, status: "Success", vendorId: "RT001696", operatorId: "110" },
    { dateTime: "23-Aug-2024", product: "Verify Money Transfer Account", account: "aaa", amount: 0.00, status: "Success", vendorId: "RT001696", operatorId: "110" },
    { dateTime: "23-Aug-2024", product: "Verify Money Transfer Account", account: "aaa", amount: 0.00, status: "Success", vendorId: "RT001696", operatorId: "110" },
    { dateTime: "23-Aug-2024", product: "Verify Money Transfer Account", account: "aaa", amount: 0.00, status: "Success", vendorId: "RT001696", operatorId: "110" },
    { dateTime: "22-Aug-2024", product: "Subscription Plan", account: "RT001696", amount: 0.00, status: "Success", vendorId: "RT001696", operatorId: "119" },
    { dateTime: "08-Aug-2024", product: "Subscription Plan", account: "RT001696", amount: 352.82, status: "Success", vendorId: "RT001696", operatorId: "119" },
  ];
  
  return (
    <div className="md:col-span-8">
    <h2 className="text-lg font-semibold bg-blue-600 text-white p-2 rounded-t-md">Latest Orders</h2>
    <div className="overflow-hidden rounded-t-none rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                DateTime
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Product
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Account
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Amount
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Vendor Id
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Operator Id
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {order.dateTime}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.product}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.account}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.amount.toFixed(2)}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm">
                  <Badge
                    size="sm"
                    color={order.status === "Success" ? "success" : "error"}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.vendorId}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.operatorId}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
  )
}

export default ElectricityOrderLayer
