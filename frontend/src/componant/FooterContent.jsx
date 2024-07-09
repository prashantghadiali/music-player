import { Box, Card, CardBody, Button, Center, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { Howl } from 'howler';
import React, { useEffect, useRef, useState } from 'react';

const songs = [
    {
        id: 1,
        title: 'Beat It',
        artist: 'Michael Jackson',
        cover: '/micheljack.png',
        src: '/beat-it.mp3', // Replace with your actual song file path
    },
    // Add more songs as needed
];

const FooterContent = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayerRef = useRef(null);

    const handlePlay = () => {
        if (audioPlayerRef.current) {
            if (isPlaying) {
                audioPlayerRef.current.pause();
            } else {
                audioPlayerRef.current.play();
            }
        }
    };

    const handlePrevious = () => {
        const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        setCurrentSongIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(newIndex);
    };

    useEffect(() => {
        const player = new Howl({
            src: [songs[currentSongIndex].src],
            html5: true,
            onplay: () => {
                setIsPlaying(true);
            },
            onpause: () => {
                setIsPlaying(false);
            },
            onend: () => {
                setIsPlaying(false);
                handleNext();
            },
        });

        audioPlayerRef.current = player;
        return () => {
            player.unload();
        };
    }, [currentSongIndex]);

    return (
        <div>
            <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
                <Box height="80px"></Box>
                <Box height="80px"></Box>
                <Box height="120px"></Box>
                <Box className="musicCard">
                    <Card borderRadius={10}>
                        <Center><Text fontWeight={800} marginBottom={1}>Now Playing</Text></Center>
                        <CardBody>
                            <Image src={songs[currentSongIndex].cover} borderRadius={10} width={239} height={136} marginBottom={3} alt="Image" />
                            <Center><Text fontSize={'large'} fontWeight={700}>{songs[currentSongIndex].title}</Text></Center>
                            <Center><Text fontWeight={300}>{songs[currentSongIndex].artist}</Text></Center>
                            <Center mt={3}>
                                <Button onClick={handlePrevious} variant="ghost" size="sm" mx={1}>
                                    <FaStepBackward />
                                </Button>
                                <Button onClick={handlePlay} variant="ghost" size="lg" mx={1}>
                                    {isPlaying ? <FaPause /> : <FaPlay />}
                                </Button>
                                <Button onClick={handleNext} variant="ghost" size="sm" mx={1}>
                                    <FaStepForward />
                                </Button>
                            </Center>
                        </CardBody>
                    </Card>
                </Box>
            </SimpleGrid>
        </div>
    );
};

export default FooterContent;