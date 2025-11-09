import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import type { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }

  // @Post()
  // createBoard(@Body() body: { title: string; description: string }) {
  //   const { title, description } = body;
  //   return this.boardService.createBoard(title, description);
  // }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardService.createBoard(title, description);
  }
}
