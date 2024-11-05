import HomeBtn from "./HomeBtn";
import { ModeToggle } from "./mode-toggle";
import { Input } from "../ui/input";
import PopoverSearch from "../form/PopoverSearch";

import useAuth from "@/hooks/useAuth";
import useMediaQuery from "@/hooks/useMediaQuery";

import UnauthorizedUserBtns from "./UnauthorizedUserBtns";
import ProfilePic from "./ProfilePic";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  // Add a context  for the window width from MainContent
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { user, loading } = useAuth();

  return (
    <header className='h-[50px] flex shrink-0 items-center justify-between p-4 bg-primary'>
      <SidebarTrigger />
      <HomeBtn />
      <div className='flex items-center  space-x-4'>
        <ModeToggle />

        {isDesktop ? (
          <Input
            placeholder='Search'
            className=' bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500'
          />
        ) : (
          <PopoverSearch />
        )}

        {!loading && user ? <ProfilePic /> : <UnauthorizedUserBtns />}
      </div>
    </header>
  );
};

export default Header;
