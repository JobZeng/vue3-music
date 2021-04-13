// import storage from 'good-storage'

// const SEARACH_KEY = '_search_'
// const SEARACH_MAX_LENGTH = 15

// const PLAY_KEY = '_play_'
// const PLAY_MAX_LENGTH = 200


// const FAVORITE_KEY = '_favorite_'
// const FAVORITE_MAX_LENGTH = 200



// // 比较函数compare
// function insertArray(arr, val, compare, maxlen) {
//   const index = arr.findIndex(compare)
//   if(index === 0) {
//     return
//   } 
//   if(index > 0) {
//     // splice 传2个参数的时候是删除，传三个参数的时候是增加
//     arr.splice(index,1)
//   }
//   arr.unshift(val)
//   //   
//   if(maxlen && arr.lenght > maxlen) {
//     // 将数组的最后一个元素剔除
//     arr.pop()
//   }
// }

// function deleteFromArray(arr, compare) {
//   const index = arr.findIndex(compare)
//   if(index > -1) {
//     arr.splice(index, 1)
//   }

// }

// export function saveSearch(query) {
//   let searches = storage.get(SEARACH_KEY, [])
//   insertArray(searches,query,(item) => {
//     // 三等一定要注意啊
//     return item === query
//   },SEARACH_MAX_LENGTH)
//   storage.set(SEARACH_KEY,searches)
//   return searches
// }

// export function loadSearch() {
//   return storage.get(SEARACH_KEY, [])
// }

// export function deleteSearch(query) {
//   let searches = storage.get(SEARACH_KEY, [])
//   deleteFromArray(searches,(item) => {
//     return item === query
//   })
//   storage.set(SEARACH_KEY,searches)
//   return searches
// }

// export function clearHistory() {
//   storage.remove(SEARACH_KEY)
//   return []
// }

// export function saveFavorite(song) {
//   let songs = storage.get(FAVORITE_KEY, [])
//   insertArray(songs, song, (item) =>{
//     return song.id === item.id
//   },FAVORITE_MAX_LENGTH)
//   storage.set(FAVORITE_KEY, songs)
//   return songs
// }


// export function deleteFavorite(song) {
//   let songs = storage.get(FAVORITE_KEY, [])
//   deleteFromArray(songs, (item) => {
//     return item.id === song.id
//   })
//   storage.set(FAVORITE_KEY, songs)
//   return songs
// }

// export function loadFavorite() {
//   return storage.get(FAVORITE_KEY, [])
// }

// export function savePlay(song) {
//   let songs = storage.get(PLAY_KEY, [])
//   insertArray(songs, song,(item) => {
//     return item.id === song.id
//   }, PLAY_MAX_LENGTH)
//   storage.set(PLAY_KEY, songs)
//   return songs
// }

// export function loadPlay() {
//   return storage.get(PLAY_KEY, [])
// }