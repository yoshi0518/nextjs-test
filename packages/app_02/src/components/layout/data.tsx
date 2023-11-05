const DataLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen">
    <div className="w-46 bg-gray-100 p-2">Side Menu</div>
    <div className="p-2">{children}</div>
  </div>
);

export default DataLayout;
