import { SetMetadata } from '@nestjs/common';

export const UseJwtInterceptor = () => SetMetadata('useJwtInterceptor', true);
