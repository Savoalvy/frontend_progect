import { Loader } from '@shared/ui/Loader';
import { classNames } from '@shared/lib/classNames';
import s from './style.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(s.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
