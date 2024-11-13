import { ListItem } from "@/components/ListItem";
import { Input } from "@/components/ui/input";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const DrugList = () => {
  const [search, setSearch] = useState("");
  const { loadMore, hasMore, drugList } = useInfiniteScroll(search);

  console.log(drugList);
  if (!drugList) {
    return <div>Loading...</div>;
  }
  return (
    <div className='w-full flex flex-col items-center '>
      <div className=''>
        <span className='text-2xl'>Drug List</span>
        <Input
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <InfiniteScroll
        className='flex flex-col gap-4'
        dataLength={drugList.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}>
        {drugList.map((drug) => (
          <ListItem
            key={drug.no}
            drug={drug}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default DrugList;
