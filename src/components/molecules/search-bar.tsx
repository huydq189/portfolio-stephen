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
              className="hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowRight />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full transition-colors"
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
              className="h-6 w-6 hover:bg-gray-200 rounded-full transition-colors mx-3"
            >
              <StarIcon className="h-3 w-3 text-gray-600" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2 mx-3">
          <Avatar className="size-6">
            <AvatarImage src="https://file.notion.so/f/f/cc4e7ea7-67eb-4cc4-bad8-8935074fcf83/8a84121f-08f5-41b3-a573-60e5f6ff7061/image.png?table=block&id=20093664-4d82-8069-8f00-dbc6aa7354e2&spaceId=cc4e7ea7-67eb-4cc4-bad8-8935074fcf83&expirationTimestamp=1752019200000&signature=hxE8IqB0cWHpQUA9OKdj2N3is5S3c1LYo8rwErYOoLA&downloadName=image.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div
            className="flex
           items-center"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full transition-colors"
            >
              <EllipsisVertical />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
