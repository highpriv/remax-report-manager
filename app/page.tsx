import LoginView from "@/views/login";

export default function Home() {
  return (
    <div className="login-page">
      <div className="bg-white shadow-outline-white rounded-lg p-8 w-4/5 md:w-2/6 h-3/4">
        <LoginView />
      </div>
    </div>
  );
}
