import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

function Popularartists() {

    const [songs, setSongs] = useState(
        [
          { id: '0', name: '中国风《莫问归期》官方', artists: '蒋雪儿Snow.J', image: 'https://i.scdn.co/image/ab67616d0000b273818e515c6908e4604a1b4077', liked: false,},
          { id: '1', name: 'Love Me Not', artists: 'Ravyn Lenae', image: 'https://i.ytimg.com/vi/7avJyVkxVA0/maxresdefault.jpg', liked: false,},
          { id: '2', name: 'back to friends', artists: 'Sombr', image: 'https://i.ytimg.com/vi/fOQ_-gZsnYQ/mqdefault.jpg', liked: false,},
          { id: '3', name: 'BIRDS OF A FEATHER', artists: 'Billie Eilish', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c02371bec2e9bf85b37831453', liked: false,},
          { id: '4', name: 'blue', artists: 'yung kai', image: 'https://i.scdn.co/image/ab67616d0000b273373c63a4666fb7193febc167', liked: false,},
        ]
      );
    
      const toggleLike = (songId: string) => {
        setSongs(prevSongs =>
          prevSongs.map(song =>
            song.id === songId
              ? {
                  ...song,
                  liked: !song.liked,
                }
              : song
          )
        );
      };

    return (
        <>
            <div className="pt-10 pb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">Popular Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {songs.map((artists) => (
                    <div
                        key={artists.id}
                        className="group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden 
                                border border-gray-700/50 hover:border-indigo-500/50 
                                transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10
                                cursor-pointer"
                    >
                        <button
                            onClick={() => toggleLike(artists.id)}
                            className="absolute top-2 right-2 z-20 p-2 rounded-full 
                                        bg-black/40 hover:bg-black/60 transition-colors
                                        backdrop-blur-sm"
                            aria-label={artists.liked ? "Unlike" : "Like"}
                            >
                            {artists.liked ? (
                                <HeartSolid className="w-6 h-6 text-red-500" />
                            ) : (
                                <HeartIcon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                            )}
                        </button>
                        <div className="aspect-square overflow-hidden">
                        <img
                            src={artists.image}
                            alt={artists.name}
                            className="w-full h-full object-cover transition-transform duration-500 
                                    group-hover:scale-110"
                        />
                        </div>
                        <div className="p-4">
                        <h3 className="font-semibold text-white truncate group-hover:text-indigo-400 transition-colors">
                            {artists.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1 truncate">
                            {artists.artists}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Popularartists