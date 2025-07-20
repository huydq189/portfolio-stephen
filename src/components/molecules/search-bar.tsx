import {
  ArrowLeft,
  ArrowRight,
  EllipsisVertical,
  LockIcon,
  RotateCw,
  StarIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage, Button } from '../atoms';

export function SearchBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-1">
      <div className="flex items-center justify-between max-w-full">
        <div className="flex items-center mx-3">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full transition-colors active:bg-gray-200"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full transition-colors active:bg-gray-200"
            >
              <ArrowRight />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full transition-colors active:bg-gray-200"
            >
              <RotateCw />
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center bg-gray-100 rounded-full border border-transparent hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <div className="flex items-center gap-2 mx-3">
              <LockIcon className="h-3 w-3 text-gray-600" />
            </div>
            <input
              type="text"
              readOnly
              className="text-center flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500 h-7"
              placeholder="page.tsx > portfolio-stephen"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 hover:bg-gray-200 rounded-full transition-colors mx-3 active:bg-gray-300"
            >
              <StarIcon className="h-3 w-3 text-gray-600" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2 mx-3">
          <Avatar className="size-6">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQF7dyGnGmLMsQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708065199252?e=1757548800&v=beta&t=tuuM8cu7FlFEOfpZ68sDZKLow9GBJYSTAPTGdBb7NBQ" />
            <AvatarFallback>HD</AvatarFallback>
          </Avatar>
          <div
            className="flex
           items-center"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full transition-colors active:bg-gray-200"
            >
              <EllipsisVertical />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
