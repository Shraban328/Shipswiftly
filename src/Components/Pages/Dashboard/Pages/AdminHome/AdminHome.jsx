import Chart from "react-apexcharts";

const AdminHome = () => {
  return (
    <div className="ml-9 mt-9">
      <h1>this is admin home page</h1>
      <div>
        <Chart
          options={{
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: [
                "10/12/23",
                "11/12/23",
                "12/12/23",
                "13/12/23",
                "13/12/23",
                "14/12/23",
                "15/12/23",
                "10/12/23",
              ],
            },
            yaxis: {
              categories: [5, 10, 15, 20, 25, 30, 35, 40],
            },
          }}
          series={[
            {
              name: "series-1",
              data: [5, 10, 15, 20, 25, 30, 35, 40],
            },
          ]}
          type="bar"
          width="500"
        />
      </div>
    </div>
  );
};

export default AdminHome;
