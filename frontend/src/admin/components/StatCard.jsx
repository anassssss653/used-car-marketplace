function StatCard({ title, value, color }) {
  return (
    <div className={`${color} text-white rounded-2xl p-6 shadow-lg`}>

      <h2 className="text-lg">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>

    </div>
  );
}

export default StatCard;