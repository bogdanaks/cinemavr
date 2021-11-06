import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppGateways } from './app.gateways'
import { EventsModule } from './events/events.module'

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService, AppGateways],
})
export class AppModule {
}
