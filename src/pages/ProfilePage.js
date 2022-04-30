import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function ProfilePage() {
  const { username, aaa } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      hihi {username} {aaa} {searchParams.get("id")}
    </div>
  );
}
