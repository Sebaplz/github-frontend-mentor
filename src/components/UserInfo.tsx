import Image from "next/image";
import PositionIcon from "@/components/icons/PositionIcon"
import LinkIcon from "@/components/icons/LinkIcon"
import TwitterIcon from "@/components/icons/TwitterIcon"
import BuildingIcon from "@/components/icons/BuildingIcon"
import { User } from "@/interfaces/user";

interface Props {
    user: User;
}

function UserInfo({ user }: Props) {
    return (
        <article className="text-white p-4 sm:p-8 bg-white dark:bg-[#1f2a48] rounded-lg flex gap-4 justify-center">
            <div className="hidden md:block">
                <Image
                    src={user.avatar_url}
                    width={200}
                    height={200}
                    alt={`profile img user ${user.name}`}
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="md:hidden">
                        <Image
                            src={user.avatar_url}
                            width={150}
                            height={150}
                            alt={`profile img user ${user.name}`}
                            className="rounded-full"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 w-full items-center md:items-start dark:text-white text-blue-900">
                        <div className="flex flex-col md:gap-2">
                            <h2 className="text-3xl">{user.name}</h2>
                            <h4 className="text-[#056ad9]">{user.login}</h4>
                        </div>
                        <h2 className="flex md:justify-end">{new Date(user.created_at || "").toLocaleDateString("es", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</h2>
                    </div>
                </div>
                <p className="dark:text-white text-blue-900">{user.bio || "This profile has no bio"}</p>
                <div className="bg-blue-100 dark:bg-[#141c2f] rounded-lg p-8 flex justify-between dark:text-white text-blue-900">
                    <article className="flex flex-col">
                        <p>Repos</p>
                        <p>{user.public_repos}</p>
                    </article>
                    <article className="flex flex-col">
                        <p>Followers</p>
                        <p>{user.followers}</p>
                    </article>
                    <article className="flex flex-col">
                        <p>Following</p>
                        <p>{user.following}</p>
                    </article>
                </div>
                <div className="grid gap-2 dark:text-white text-blue-900 sm:grid-cols-2">
                    <div className="flex gap-2 items-center">
                        <PositionIcon className="fill-blue-900 dark:fill-white h-5 w-5" />
                        <h3>{user.location || "Not Available"}</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <LinkIcon className="fill-blue-900 dark:fill-white h-5 w-5" />
                        <a href={user.html_url}>{user.html_url || "Not Available"}</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TwitterIcon className="fill-blue-900 dark:fill-white h-5 w-5" />
                        {user.twitter_username !== null ? (
                            <a href={`https://twitter.com/${user.twitter_username}`}>
                                {user.twitter_username}
                            </a>
                        ) : (
                            <span>Not Available</span>
                        )}
                    </div>
                    <div className="flex gap-2 items-center md:justify-start">
                        <BuildingIcon className="fill-blue-900 dark:fill-white h-5 w-5" />
                        <h3>{user.company || "Not Available"}</h3>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default UserInfo