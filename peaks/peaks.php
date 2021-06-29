// <?php

// /**
//  * Flags
//  *
//  *  Find the maximum number of flags that can be set on mountain peaks.
//  */


// include 'Tests.class.php';

// function solution($A) {
//     $sizeOfA = sizeof($A);

//     if ($sizeOfA < 3) {
//         return 0;
//     }

//     $peaks = array();
//     $countPeaks = 0;
//     $peaks[0] = 0;
//     $lastPeak = -1;
//     $maxPeakGap = 0;
//     for ($i = 1; $i < $sizeOfA-1; $i++) {
//         if ($A[$i - 1] < $A[$i] && $A[$i] > $A[$i + 1]) {
//             $countPeaks++;
//             $peaks[$i] = $countPeaks;
//             $maxPeakGap = max($maxPeakGap, $i - $lastPeak);
//             $lastPeak = $i;
//         } else {
//             $countPeaks;
//         }
//         $peaks[$i] = ($A[$i - 1] < $A[$i] && $A[$i] > $A[$i + 1]) ? ++$countPeaks : $countPeaks;
//     }
//     $peaks[$sizeOfA-1] = $peaks[$sizeOfA-2];

//     if ($countPeaks === 0) {
//         return 0;
//     }

//     for ($i = ($maxPeakGap >> 1) + 1; $i < $maxPeakGap; $i++) {
//         if ($sizeOfA % $i == 0) {
//             $last = 0;
//             for ($j = $i; $j <= $sizeOfA; $j += $i) {
//                 if ($peaks[$j - 1] <= $last) {
//                     break;
//                 }
//                 $last = $peaks[$j - 1];
//             }
//             if ($j > $sizeOfA) {
//                 return $sizeOfA / $i;
//             }
//         }
//     }

//     do {
//         $last = $maxPeakGap;
//         $last++;
//     } while($sizeOfA % $last);

//     return floor($sizeOfA / $last);
// }

// $test = new Tests('Peaks');

// $name = 'example';
// $A = array(1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2);
// $result = 3;
// $test->run(array($A), $result, $name);

// $name = 'extreme_min';
// $A = array(0, 1000000000);
// $result = 0;
// $test->run(array($A), $result, $name);

// $name = 'extreme_without_peaks';
// $A = array(1, 2, 3, 4, 5, 6);
// $result = 0;
// $test->run(array($A), $result, $name);

// $name = 'prime_length';
// $A = array(0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0);
// $result = 1;
// $test->run(array($A), $result, $name);

// $name = 'simple1';
// $A = array(1, 2, 3, 4, 5, 6, 5, 5, 5, 6, 5, 6);
// $result = 2;
// $test->run(array($A), $result, $name);

// $name = 'medium_anti_slow';
// for($i=0; $i<2310; $i=$i+2) {
//     $A[$i] = 0;
//     $A[$i+1] = 1;
// }
// $A[2310] = 0;
// $result = 1;
// $test->run(array($A), $result, $name);

// $name = 'large_anti_slow';
// for($i=0; $i<30030; $i=$i+2) {
//     $A[$i] = 0;
//     $A[$i+1] = 1;
// }
// $result = 30030;
// $test->run(array($A), $result, $name);



<?php
/*
 * Set some input - format is [Hz, milliseconds], so [440, 1000] is 440Hz (A4) for 1 second
 */
$input = [
    [175, 1000],
    [350, 1000],
    [500, 1000],
    [750, 1000],
    [1000, 1000]
];

//Path to output file
$filePath = 'test.wav';

//Open a handle to our file in write mode, truncate the file if it exists
$fileHandle = fopen($filePath, 'w');

// Calculate variable dependent fields
$channels = 1; //Mono
$bitDepth = 8; //8bit
$sampleRate = 44100; //CD quality
$blockAlign = ($channels * ($bitDepth/8));
$averageBytesPerSecond = $sampleRate * $blockAlign;

/*
 * Header chunk
 * dwFileLength will be calculated at the end, based upon the length of the audio data
 */
$header = [
    'sGroupID' => 'RIFF',
    'dwFileLength' => 0,
    'sRiffType' => 'WAVE'
];

/*
 * Format chunk
 */
$fmtChunk = [
    'sGroupID' => 'fmt',
    'dwChunkSize' => 16,
    'wFormatTag' => 1,
    'wChannels' => $channels,
    'dwSamplesPerSec' => $sampleRate,
    'dwAvgBytesPerSec' => $averageBytesPerSecond,
    'wBlockAlign' => $blockAlign,
    'dwBitsPerSample' => $bitDepth
];

/*
 * Map all fields to pack flags
 * WAV format uses little-endian byte order
 */
$fieldFormatMap = [
    'sGroupID' => 'A4',
    'dwFileLength'=> 'V',
    'sRiffType' => 'A4',
    'dwChunkSize' => 'V',
    'wFormatTag' => 'v',
    'wChannels' => 'v',
    'dwSamplesPerSec' => 'V',
    'dwAvgBytesPerSec' => 'V',
    'wBlockAlign' => 'v',
    'dwBitsPerSample' => 'v' //Some resources say this is a uint but it's not - stay woke.
];


/*
 * Pack and write our values
 * Keep track of how many bytes we write so we can update the dwFileLength in the header
 */
$dwFileLength = 0;
foreach($header as $currKey=>$currValue)
{
    if(!array_key_exists($currKey, $fieldFormatMap))
    {
        die('Unrecognized field '.$currKey);
    }

    $currPackFlag = $fieldFormatMap[$currKey];
    $currOutput = pack($currPackFlag, $currValue);
    $dwFileLength += fwrite($fileHandle, $currOutput);
}

foreach($fmtChunk as $currKey=>$currValue)
{
    if(!array_key_exists($currKey, $fieldFormatMap))
    {
        die('Unrecognized field '.$currKey);
    }

    $currPackFlag = $fieldFormatMap[$currKey];
    $currOutput = pack($currPackFlag, $currValue);
    $dwFileLength += fwrite($fileHandle, $currOutput);
}

/*
 * Set up our data chunk
 * As we write data, the dwChunkSize in this struct will be updated, be sure to pack and overwrite
 * after audio data has been written
 */
$dataChunk = [
    'sGroupID' => 'data',
    'dwChunkSize' => 0
];

//Write sGroupID
$dwFileLength += fwrite($fileHandle, pack($fieldFormatMap['sGroupID'], $dataChunk['sGroupID']));

//Save a reference to the position in the file of the dwChunkSize field so we can overwrite later
$dataChunkSizePosition = $dwFileLength;

//Write our empty dwChunkSize field
$dwFileLength += fwrite($fileHandle, pack($fieldFormatMap['dwChunkSize'], $dataChunk['dwChunkSize']));

/*
    8-bit audio: -128 to 127 (because of 2’s complement)
 */
$maxAmplitude = 127;

//Loop through input
foreach($input as $currNote)
{
    $currHz = $currNote[0];
    $currMillis = $currNote[1];

    /*
     * Each "tick" should be 1 second divided by our sample rate. Since we're counting in milliseconds, use
     * 1000/$sampleRate
     */
    $timeIncrement = 1000/$sampleRate;

    /*
     * Define how much each tick should advance the sine function. 360deg/(sample rate/frequency)
     */
    $waveIncrement = 360/($sampleRate/$currHz);

    /*
     * Run the sine function until we have written all the samples to fill the current note time
     */
    $elapsed = 0;
    $x = 0;
    while($elapsed<$currMillis)
    {
        /*
         * The sine wave math
         * $maxAmplitude*.95 lowers the output a bit so we're not right up at 0db
         */
        $currAmplitude = ($maxAmplitude)-number_format(sin(deg2rad($x))*($maxAmplitude*.95));

        //Increment our position in the wave
        $x+=$waveIncrement;

        //Write the sample and increment our byte counts
        $currBytesWritten = fwrite($fileHandle, pack('c', $currAmplitude));
        $dataChunk['dwChunkSize'] += $currBytesWritten;
        $dwFileLength  += $currBytesWritten;

        //Update the time counter
        $elapsed += $timeIncrement;
    }
}

/*
 * Seek to our dwFileLength and overwrite it with our final value. Make sure to subtract 8 for the
 * sGroupID and sRiffType fields in the header.
 */
fseek($fileHandle, 4);
fwrite($fileHandle, pack($fieldFormatMap['dwFileLength'], ($dwFileLength-8)));

//Seek to our dwChunkSize and overwrite it with our final value
fseek($fileHandle, $dataChunkSizePosition);
fwrite($fileHandle, pack($fieldFormatMap['dwChunkSize'], $dataChunk['dwChunkSize']));
fclose($fileHandle);
