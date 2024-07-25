class recentlyplayedstore {
    constructor(capacity) {
        this.capacity = capacity;
        this.userSongs = new Map();
    }

    playSong(user, song) {
        if (!this.userSongs.has(user)) {
            this.userSongs.set(user, []);
        }

        let songs = this.userSongs.get(user);
        let songIndex = songs.indexOf(song);

        if (songIndex !== -1) {
            songs.splice(songIndex, 1);
        }

        songs.push(song);

        if (songs.length > this.capacity) {
            songs.shift();
        }

        this.userSongs.set(user, songs);
    }

    getRecentlyPlayed(user) {
        if (!this.userSongs.has(user)) {
            return [];
        }
        return this.userSongs.get(user);
    }
}


let store = new RecentlyPlayedStore(3);
store.playSong("User1", "S1");
store.playSong("User1", "S2");
store.playSong("User1", "S3");
console.log(store.getRecentlyPlayed("User1"));  

store.playSong("User1", "S4");
console.log(store.getRecentlyPlayed("User1"));  

store.playSong("User1", "S2");
console.log(store.getRecentlyPlayed("User1"));  

store.playSong("User1", "S1");
console.log(store.getRecentlyPlayed("User1")); 