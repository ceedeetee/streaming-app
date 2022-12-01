import { HomeIcon, BoltIcon, CheckBadgeIcon, BookOpenIcon, MagnifyingGlassCircleIcon, UserIcon } from "@heroicons/react/24/outline"
    
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={BoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={BookOpenIcon}/>
                <HeaderItem title='SEARCH' Icon={MagnifyingGlassCircleIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image
                className="object-contain"
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                width={200}
                height={200}
                alt='app-logo'
            />
        </header>
    )
}

export default Header