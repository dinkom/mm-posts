class DataService {
  constructor() {
    this.apiRoot = 'https://demo.martian.agency/api';
    this.endpoints = {
      posts: `${this.apiRoot}/posts`,
      comments: `${this.apiRoot}/comments`,
      users: `${this.apiRoot}/users`,
    };
    this.posts = [];
    this.comments = [];
    this.users = [];
  }

  getData(type, token, options) {
    return new Promise((resolve, reject) => {
      let endpoint = '';

      switch (type) {
        case 'comments':
          endpoint = this.endpoints.comments;
          break;
        case 'users':
          endpoint = this.endpoints.users;
          break;
        case 'post':
          endpoint = `${this.endpoints.posts}/${options.postId}`;
          break;
        default:
          endpoint = this.endpoints.posts;
      }

      fetch(endpoint, {
        method: 'GET',
        headers: {
          'X-Auth': token
        }
      }).then(response => response.json())
        .then((jsonResponse) => {
          if (type === 'comments') {
            this.comments = jsonResponse;
          } else if (type === 'users') {
            this.users = jsonResponse;
          } else {
            this.posts = jsonResponse;
          }

          switch (type) {
            case 'comments':
              this.comments = jsonResponse;
              break;
            case 'users':
              this.users = jsonResponse;
              break;
            case 'post':
              this.post = jsonResponse;
              resolve(this.post);
              break;
            default:
              this.posts = jsonResponse;
          }

          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getConnectedData() {
    this.posts.forEach((post, index) => {
      const user = this.users.filter(u => u.id === post.userId);
      if (user.length) {
        post.user = user[0];
      }
      post.comments = this.comments.filter(c => c.postId === post.id);
    });

    window.localStorage.setItem('allPosts', JSON.stringify(this.posts));
    return this.posts;
  }

  getConnectedPostData(postId) {
    const data = JSON.parse(window.localStorage.getItem('allPosts'));
    return data.filter(d => d.id === postId)[0];
  }
}

export default DataService;
