function loginWithGitHun() {
    window.location.href = 'http://github.com/login/oauth/authorize?client_id=3fbe102e61d11e2f931c&scope=user';
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if (error === 'access_denied') {
    window.location.href = 'index.html';
}