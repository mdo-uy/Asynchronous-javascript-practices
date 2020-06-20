console.log('Before');

getUser(1, function(user) {
    // Get User
    console.log('User:', user);

    // Get the repositories
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);
    });
});

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Simulating reading a user from a database...')
        callback({ id: id, gitHubUsername: 'mdo-uy' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Simulating calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)    
}