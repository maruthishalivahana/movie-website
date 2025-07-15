import React from 'react'
import MovieDetailsCard from './MovieDetailsCard'
import { useWatchlist } from '../../WatchlistContext'
import { toast } from 'react-toastify';
function Watchlist() {
    const { watchlist, removeFromWatchlist } = useWatchlist();

    const handleRemoveFromWatchlist = () => {
        removeFromWatchlist(movie.id);
        toast.error(`${movie.original_title} has been removed from your watchlist!`), {
            position: "top-right",
            autoclose: 3000
        }

    }
    return (
        <>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {watchlist.length === 0 && (
                    <p className="text-center text-gray-600 col-span-full">Your watchlist is empty.</p>
                )}

                {watchlist.map((movie) => (
                    <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                    : 'https://via.placeholder.com/500x750?text=No+Image'
                            }
                            alt={movie.original_title}
                            className="w-full h-[300px] object-contain "
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{movie.original_title}</h3>
                            <p className="text-sm text-gray-500">Release Date: {movie.release_date}</p>

                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={() => handlePreview(movie)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    Preview
                                </button>

                                <button
                                    onClick={() => {
                                        removeFromWatchlist(movie.id);
                                        toast.error(`${movie.original_title} has been removed from your watchlist!`), {
                                            position: "top-right",
                                            autoclose: 1000
                                        }
                                    }}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Watchlist
