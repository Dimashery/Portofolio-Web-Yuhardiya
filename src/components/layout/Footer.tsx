import {profile} from '@/data/profile';

export function Footer() {
  return (
    <footer>
      <p>
        © 2026 {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}