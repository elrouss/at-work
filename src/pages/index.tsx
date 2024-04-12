import { GalleryUsers } from '@/components/blocks/gallery-users/gallery-users';
import { Header } from '@/components/common/header/header';
import { LayoutAnimation } from '@/components/sections/layout-animation/layout-animation';
import { LayoutInner } from '@/components/sections/layout-inner/layout-inner';
import { LayoutRoot } from '@/components/sections/layout-root/layout-root';
import { getJsonData } from '@/helpers/data/getJsonData';
import { useAppSelector } from '@/services/app/hooks';
import {
  getActiveUsers,
  getArchiveUsers,
} from '@/services/features/users/selectors';

let json = null as any;
getJsonData('root').then((data) => (json = data));

export const Root = () => {
  const activeUsers = useAppSelector(getActiveUsers);
  const archiveUsers = useAppSelector(getArchiveUsers);

  return (
    <LayoutRoot>
      <Header />
      <LayoutAnimation>
        <main>
          <LayoutInner {...json?.gallery1}>
            <GalleryUsers data={activeUsers} />
          </LayoutInner>
          <LayoutInner {...json?.gallery2} bottomIndent="s">
            <GalleryUsers data={archiveUsers} />
          </LayoutInner>
        </main>
      </LayoutAnimation>
    </LayoutRoot>
  );
};
