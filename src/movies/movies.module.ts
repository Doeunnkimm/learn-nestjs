import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

/*
    작성한 controller를 보면 this.moviesServices... 로 작성되어 있다
    이게 작동한 이유는 상단에서 movieService라고 불리는 프로퍼티를 만들고 타입을 지정해줘서다

    ex)
        @Controller('movies')
        export class MovieController {
            constructor(private readonly movieService: MovieService)
        }
    
    MovieModule을 보면 Controller랑 providers를 import 하고 있다
    여기에 provider가 MovieService에 있는 모든 것들을 import해서
    타입을 추가하는 것만으로도 잘 작동하는 것

    -> module 파일에서 providers: [서비스파일]을 두면
        NestJS라 서비스 파일을 import하고 Controller에 inject(주입)하는 것!

    -> 그리고 서비스 파일에 가보면 @Injectable이라는 데코레이터 있음
    -> module 파ㅣㅇㄹ에서 providers 부분을 작성하지 않으면
        controller에서 서비스 파일을 필요로 한다는 에러가 발생하게 됨
    
*/
