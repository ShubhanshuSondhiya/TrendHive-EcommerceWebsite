import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdminProducts } from "../redux/slices/adminProductSlice";
import { fetchAllOrders } from "../redux/slices/adminOrderSlice";

const AdminHomepage = () => {
  const dispatch = useDispatch();
  const {
    products = [],
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.adminProducts);

  const {
    orders = [],
    totalOrders = 0,
    totalSales = 0,
    loading: ordersLoading,
    error: ordersError,
  } = useSelector((state) => state.adminOrders);

  useEffect(() => {
    dispatch(fetchAdminProducts());
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Loading State */}
      {productsLoading || ordersLoading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <>
          {/* Error Handling */}
          {productsError && <p className="text-red-500">Error: {productsError}</p>}
          {ordersError && <p className="text-red-500">Error: {ordersError}</p>}

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 shadow-md rounded-lg bg-white">
              <h2 className="text-xl font-semibold">Revenue</h2>
              <p className="text-2xl">${totalSales?.toFixed(2) || "0.00"}</p>
            </div>
            <div className="p-4 shadow-md rounded-lg bg-white">
              <h2 className="text-xl font-semibold">Total Orders</h2>
              <p className="text-2xl">{totalOrders}</p>
              <Link to="/admin/orders" className="text-blue-500 hover:underline">
                Manage Orders
              </Link>
            </div>
            <div className="p-4 shadow-md rounded-lg bg-white">
              <h2 className="text-xl font-semibold">Total Products</h2>
              <p className="text-2xl">{products?.length || 0}</p>
              <Link to="/admin/products" className="text-blue-500 hover:underline">
                Manage Products
              </Link>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                  <tr>
                    <th className="py-3 px-4 whitespace-nowrap">Order ID</th>
                    <th className="py-3 px-4 whitespace-nowrap">User</th>
                    <th className="py-3 px-4 whitespace-nowrap">Total Price</th>
                    <th className="py-3 px-4 whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                        <td className="p-4">{order._id}</td>
                        <td className="p-4">{order.user?.name || "Unknown"}</td>
                        <td className="p-4">${order.totalPrice?.toFixed(2) || "0.00"}</td>
                        <td className="p-4">{order.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-4 text-center text-gray-500">
                        No recent orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminHomepage;
