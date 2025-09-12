import Profile from '@/components/common/Profile';

export default function Author() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Profile />
      <div className="flex flex-col">
        <p className="text-3xl font-bold">Pigeon&apos;s Lab</p>
        <p className="text-xl font-medium tracking-wide text-muted-foreground">
          @thepigeonlab
        </p>
      </div>
    </div>
  );
}
