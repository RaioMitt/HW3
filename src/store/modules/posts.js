
const state = {
    posts: JSON.parse(localStorage.getItem('posts')) || [],
};

const getters = {
    allPosts: (state) => state.posts,
};

const actions = {
    async fetchPosts({ commit }) {
        try {
            if (state.posts.length === 0) {
                const response = await fetch('/posts.json');
                if (!response.ok) {
                  throw new Error('HTTP error! Status: ${response.status}');
                }
                const data = await response.json();
                commit('setPosts', data.posts);
              }
        } catch (error) {
            console.error('Error fetching posts: ', error)
        }
    },
    incrementLike({commit}, postId) {
        commit('incrementLike', postId)
    },
    resetLikes({commit}) {
        commit('resetLikes');
    }
};

const mutations = {
    setPosts: (state, posts) => {
        state.posts = posts;
        
    },
    incrementLike: (state, postId) => {
        const post = state.posts.find((post) => post.id === postId);
        if (post) {
            post.likes++;
            localStorage.setItem('posts', JSON.stringify(state.posts));
        } 
    },
    resetLikes: (state) => {
        state.posts.forEach(post => {
            post.likes = 0;
        })
        localStorage.setItem('posts', JSON.stringify(state.posts));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};