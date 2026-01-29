import Card from "../card";

const userData = {
  name: "Saif Muhammed",
  email: "saif@example.com",
  avatar: "https://i.pravatar.cc/150?img=12",
  phone: "+91 9876543210",
  address: "123, Dubai Street, UAE",
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
        My Profile
      </h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 flex flex-col items-center">
          <img
            src={userData.avatar}
            alt={userData.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600">{userData.phone}</p>
          <p className="text-gray-600 text-center">{userData.address}</p>

          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
            Edit Profile
          </button>
        </Card>

        {/* User Actions / Stats */}
        <Card className="p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">My Actions</h3>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            View Orders
          </button>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Wishlist
          </button>
          <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
            Logout
          </button>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
