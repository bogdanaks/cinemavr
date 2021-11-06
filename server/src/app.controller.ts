import { Controller, Get, StreamableFile } from '@nestjs/common'
import { AppService } from './app.service'
import { createReadStream } from 'fs'
import { join } from 'path'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }
  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('video')
  getMedia(): StreamableFile {
    const file = createReadStream(join(process.cwd(), './src/media/media1.mp4'))
    return new StreamableFile(file)
  }
}
