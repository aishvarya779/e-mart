import { IsArray, IsDateString, IsMilitaryTime, isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    readonly artist: string[];

    @IsDateString()
    @IsNotEmpty()
    readonly releasedDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;
}
