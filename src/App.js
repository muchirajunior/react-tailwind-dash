export default function App() {
  return (
    <div className="bg-gray-400 p-2 m-3 rounded-lg"> 
      <table className="border-separate border border-slate-500 ">
        <thead>
          <tr>
            <th className="border border-slate-600 text-slate-500 bg-gray-400">State</th>
            <th className="border border-slate-600 ">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ">Indiana</td>
            <td className="border border-slate-300 ">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ">Ohio</td>
            <td className="border border-slate-300 ">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ">Michigan</td>
            <td className="border border-slate-300 rounded ">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}