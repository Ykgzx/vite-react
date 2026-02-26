import { UserIcon, Cog6ToothIcon, ArrowUpOnSquareIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function Profile() {
    return (
        <>
            <div className="min-h-screen text-white bg-gray-900 pt-22 md:pt-22 px-4">
                <div className='flex flex-col items-center justify-center gap-4 pt-16'>
                    <UserIcon className="text-blue-500 bg-gray-800 p-3 rounded-full w-32 h-32 flex justify-center items-center" />
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <h1 className="text-4xl text-center">John Doe</h1>
                        <div className="flex gap-1">
                            <div className="flex items-center justify-center gap-1">
                                <p className="text-center">Follower</p>
                                <div>0</div>
                            </div>
                            •
                            <div className="flex items-center justify-center gap-1">
                                <p className="text-center">Following</p>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 pt-6">
                    <div className="flex items-center justify-center border p-2 rounded-full bg-gray-800">
                        <h1 className="text-sm text-center">Edit Profile</h1>
                    </div>
                    <ArrowUpOnSquareIcon className="h-9 w-9 text-gray-500" />
                    <Cog6ToothIcon className="h-9 w-9 text-gray-500" />
                    <EllipsisHorizontalIcon className="h-9 w-9 text-gray-500" />
                </div>
                <div className="pt-14 pl-8">
                    <h1 className="text-2xl font-bold">Playlist</h1>
                    <div className="pt-4 flex items-center justify-start gap-4">
                        <div className="w-16 h-16 border">
                            img
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">Playlist Name</h1>
                            <div className="flex gap-2">
                                <p className="text-sm text-gray-500">No Idea</p>
                                •
                                <p className="text-sm text-gray-500">asfdas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile