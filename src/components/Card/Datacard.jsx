
const DataCard = ({ title, data }) => (
    <div className="bg-white p-5 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-5">{title}</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-100 py-8 px-8 rounded-lg">
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="font-bold text-3xl">{item.data}</div>
              <div className="text-lg font-normal">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  export default DataCard