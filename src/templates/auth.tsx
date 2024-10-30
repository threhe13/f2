export function AuthTemplate() {
  return (
    <main className="w-full h-full grid grid-cols-2">
      <div className="w-full h-full overflow-hidden">
        <div className="max-h-svh  overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1474354503580-955e733d2a7d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="react"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center gap-8">
          <h1>Login</h1>
          <form className="w-full flex flex-col gap-4">
            <input id="email" type="email" className="rounded-md" />
            <input id="password" type="password" className="rounded-md" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
