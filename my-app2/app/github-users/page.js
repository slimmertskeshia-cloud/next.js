async function fetchUsers() {
  // We use a search endpoint here so the result includes the 'json.items' array
  const res = await fetch("https://api.github.com/search/users?q=greg");
  const json = await res.json();
  return json.items;
}

export default async function GitHubUsersPage() {
  const users = await fetchUsers();
  
  // This log will run on the server (terminal), NOT the client (browser console)
  console.log(users);

  return (
    <div className="overflow-x-auto p-8">
      <h1 className="text-2xl font-bold mb-4">GitHub Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {/* Requirement 3: space-x-3 between avatar and login */}
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img src={user.avatar_url} alt={user.login} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.login}</div>
                  </div>
                </div>
              </td>
              <td>{user.id}</td>
              <td>
                {/* Requirement 4: External link to GitHub profile */}
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-sm"
                >
                  View on GitHub
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}