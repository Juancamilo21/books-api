import { BaseEntity } from '../../../database/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Genre } from '../../genres/entities/genre.entity';

@Entity('books')
export class Book extends BaseEntity {
  @Column()
  title: string;

  @Column()
  isbn: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  pagesNumber: number;

  @Column()
  editorial: string;

  @Column()
  publicationDate: Date;

  @Column({ type: 'text' })
  image: string;

  @ManyToOne(() => Genre, (genre) => genre.books)
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
}
