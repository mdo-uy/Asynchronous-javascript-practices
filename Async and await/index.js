console.log('Before');

async function displayCommits() { 
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);    
    const commits = await getCommits(repos[0]);
    console.log(commits);
}
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Simulating reading a user from a database...')
            resolve({ id: id, gitHubUsername: 'mdo-uy' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Simulating calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });    
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });    
}