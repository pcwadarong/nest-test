import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async findOne(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id });
    if (!found) throw new NotFoundException(`Board with ID "${id}" not found`);
    return found;
  }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;

  //   const board = {
  //     id: randomUUID(),
  //     title,
  //     description,
  //     status: BOARD_STATUS.public,
  //   };

  //   this.boards.push(board);
  //   return board;
  // }

  // deleteBoard(id: string): void {
  //   const deleted = this.getBoardById(id);
  //   this.boards.filter((board) => board.id !== deleted.id);
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
