"use client";

interface UserProps {
  user: {
    name: string;
    description: string;
    image: string;
  };
}

const HoverUserComponent = ({ user }: UserProps) => {
  if (!user) return <div>User not found</div>;
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.reload();
  };
  return (
    <div
      onClick={handleCardClick}
      className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 duration-300 cursor-pointer"
    >
      <div className="relative h-48 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600">
        <div className="absolute -bottom-16 left-8">
          <img
            src={user?.image}
            alt={user?.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="pt-20 px-8 pb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-3">{user?.name}</h1>
        <p className="text-slate-600 leading-relaxed">{user?.description}</p>
      </div>
    </div>
  );
};

export default HoverUserComponent;
