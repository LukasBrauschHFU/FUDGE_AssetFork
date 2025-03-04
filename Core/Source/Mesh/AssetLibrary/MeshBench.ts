namespace FudgeCore {

    export class MeshBench extends Mesh {
        public static readonly iSubclass: number = Mesh.registerSubclass(MeshBench);


        public constructor(_name: string = "MeshBench", /*_bladeLength: number = 0, _bladeWidth: number = 0, _handleWidth: number = 0*/) {
            super(_name);

            this.vertices = new Vertices(
            
                // ground vertices
                new Vertex(new Vector3(-0.573129, 0.785244, -1.495515), new Vector2(0.375000, 0.000000)),
                new Vertex(new Vector3(-0.573129, 0.911285, -1.495515), new Vector2(0.375000, 1.000000)),
                new Vertex(new Vector3(-0.573129, 0.785244, -4.076645), new Vector2(0.125000, 0.750000)),
                new Vertex(new Vector3(-0.573129, 0.911285, -4.076645), new Vector2(0.625000, 0.000000)),
                new Vertex(new Vector3(0.235863, 0.785244, -1.495515), new Vector2(0.625000, 1.000000)),
                new Vertex(new Vector3(0.235863, 0.911285, -1.495515), new Vector2(0.875000, 0.750000)),
                new Vertex(new Vector3(0.235863, 0.785244, -4.076645), new Vector2(0.125000, 0.500000)),
                new Vertex(new Vector3(0.235863, 0.911285, -4.076645), new Vector2(0.375000, 0.250000)),
                new Vertex(new Vector3(-0.712579, 1.587976, -1.495515), new Vector2(0.625000, 0.250000)),
                new Vertex(new Vector3(-0.586538, 1.588012, -1.495515), new Vector2(0.875000, 0.500000)),
                new Vertex(new Vector3(-0.712579, 1.587976, -4.076645), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.586538, 1.588013, -4.076645), new Vector2(0.625000, 0.750000)),
                new Vertex(new Vector3(-0.712367, 1.061898, -1.495515), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(-0.586325, 1.061935, -1.495515), new Vector2(0.625000, 0.500000)),
                new Vertex(new Vector3(-0.712367, 1.061899, -4.076645), new Vector2(0.375000, 0.000000)),
                new Vertex(new Vector3(-0.586326, 1.061935, -4.076645), new Vector2(0.375000, 1.000000)),
                new Vertex(new Vector3(-0.769008, 0.782771, -1.714190), new Vector2(0.125000, 0.750000)),
                new Vertex(new Vector3(-0.769008, 1.479272, -1.714190), new Vector2(0.625000, 0.000000)),
                new Vertex(new Vector3(-0.769008, 0.782771, -1.857970), new Vector2(0.625000, 1.000000)),
                new Vertex(new Vector3(-0.769008, 1.479272, -1.857970), new Vector2(0.875000, 0.750000)),
                new Vertex(new Vector3(-0.712224, 0.782771, -1.714190), new Vector2(0.125000, 0.500000)),
                new Vertex(new Vector3(-0.712224, 1.479272, -1.714190), new Vector2(0.375000, 0.250000)),
                new Vertex(new Vector3(-0.712224, 0.782771, -1.857970), new Vector2(0.625000, 0.250000)),
                new Vertex(new Vector3(-0.712224, 1.479272, -1.857970), new Vector2(0.875000, 0.500000)),
                new Vertex(new Vector3(-0.769008, 0.720496, -1.857970), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.769008, 0.720496, -1.714190), new Vector2(0.625000, 0.750000)),
                new Vertex(new Vector3(-0.712224, 0.720496, -1.857970), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(-0.712224, 0.720496, -1.714190), new Vector2(0.625000, 0.500000)),
                new Vertex(new Vector3(-0.769008, 0.300000, -1.857970), new Vector2(0.375000, 0.000000)),
                new Vertex(new Vector3(-0.769008, 0.300000, -1.714190), new Vector2(0.375000, 1.000000)),
                new Vertex(new Vector3(-0.712224, 0.300000, -1.857970), new Vector2(0.625000, 0.000000)),
                new Vertex(new Vector3(-0.712224, 0.300000, -1.714190), new Vector2(0.625000, 1.000000)),
                new Vertex(new Vector3(0.148386, 0.782771, -1.714190), new Vector2(0.875000, 0.750000)),
                new Vertex(new Vector3(0.148386, 0.782771, -1.857970), new Vector2(0.375000, 0.250000)),
                new Vertex(new Vector3(0.148386, 0.720496, -1.714190), new Vector2(0.625000, 0.250000)),
                new Vertex(new Vector3(0.148386, 0.720496, -1.857970), new Vector2(0.875000, 0.500000)),
                new Vertex(new Vector3(0.219818, 0.782771, -1.714190), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(0.219818, 0.782771, -1.857970), new Vector2(0.625000, 0.750000)),
                new Vertex(new Vector3(0.219818, 0.720496, -1.714190), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(0.219818, 0.720496, -1.857970), new Vector2(0.625000, 0.500000)),
                new Vertex(new Vector3(0.148386, 0.301056, -1.714190), new Vector2(0.375000, 0.250000)),
                new Vertex(new Vector3(0.148386, 0.301056, -1.857970), new Vector2(0.375000, 1.000000)),
                new Vertex(new Vector3(0.219818, 0.301056, -1.714190), new Vector2(0.375000, 0.000000)),
                new Vertex(new Vector3(0.219818, 0.301056, -1.857970), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(-0.769008, 0.782771, -3.714190), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.769008, 1.479272, -3.714190), new Vector2(0.125000, 0.500000)),
                new Vertex(new Vector3(-0.769008, 0.782771, -3.857970), new Vector2(0.375000, 0.250000)),
                new Vertex(new Vector3(-0.769008, 1.479272, -3.857970), new Vector2(0.375000, 1.000000)),
                new Vertex(new Vector3(-0.712224, 0.782771, -3.714190), new Vector2(0.125000, 0.750000)),
                new Vertex(new Vector3(-0.712224, 1.479272, -3.714190), new Vector2(0.375000, 0.000000)),
                new Vertex(new Vector3(-0.712224, 0.782771, -3.857970), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(-0.712224, 1.479272, -3.857970), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.769008, 0.720496, -3.857970), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.769008, 0.720496, -3.714190), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(-0.712224, 0.720496, -3.857970), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.712224, 0.720496, -3.714190), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(-0.769008, 0.300000, -3.857970), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.769008, 0.300000, -3.714190), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(-0.712224, 0.300000, -3.857970), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(-0.712224, 0.300000, -3.714190), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(0.148386, 0.782771, -3.714190), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(0.148386, 0.782771, -3.857970), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(0.148386, 0.720496, -3.714190), new Vector2(0.375000, 0.750000)),
                new Vertex(new Vector3(0.148386, 0.720496, -3.857970), new Vector2(0.375000, 0.500000)),
                new Vertex(new Vector3(0.219818, 0.782771, -3.714190), new Vector2(0.375000, 0.000000)),
                new Vertex(new Vector3(0.219818, 0.782771, -3.857970), new Vector2(0.375000, 1.000000)),
                new Vertex(new Vector3(0.219818, 0.720496, -3.714190), new Vector2(0.625000, 0.000000)),
                new Vertex(new Vector3(0.219818, 0.720496, -3.857970), new Vector2(0.625000, 1.000000)),
                new Vertex(new Vector3(0.148386, 0.301056, -3.714190), new Vector2(0.875000, 0.750000)),
                new Vertex(new Vector3(0.148386, 0.301056, -3.857970), new Vector2(0.375000, 0.250000)),
                new Vertex(new Vector3(0.219818, 0.301056, -3.714190), new Vector2(0.625000, 0.250000)),
                new Vertex(new Vector3(0.219818, 0.301056, -3.857970), new Vector2(0.875000, 0.500000))
            )
            this.faces = [
                new Face(this.vertices, 1, 2, 0),
                new Face(this.vertices, 3, 6, 2),
                new Face(this.vertices, 7, 4, 6),
                new Face(this.vertices, 5, 0, 4),
                new Face(this.vertices, 6, 0, 2),
                new Face(this.vertices, 3, 5, 7),
                new Face(this.vertices, 9, 10, 8),
                new Face(this.vertices, 11, 14, 10),
                new Face(this.vertices, 15, 12, 14),
                new Face(this.vertices, 12, 9, 8),
                new Face(this.vertices, 14, 8, 10),
                new Face(this.vertices, 11, 13, 15),
                new Face(this.vertices, 17, 18, 16),
                new Face(this.vertices, 19, 22, 18),
                new Face(this.vertices, 23, 20, 22),
                new Face(this.vertices, 21, 16, 20),
                new Face(this.vertices, 16, 27, 20),
                new Face(this.vertices, 19, 21, 23),
                new Face(this.vertices, 25, 31, 27),
                new Face(this.vertices, 22, 24, 18),
                new Face(this.vertices, 18, 25, 16),
                new Face(this.vertices, 20, 33, 22),
                new Face(this.vertices, 30, 29, 28),
                new Face(this.vertices, 26, 28, 24),
                new Face(this.vertices, 27, 30, 26),
                new Face(this.vertices, 24, 29, 25),
                new Face(this.vertices, 34, 36, 32),
                new Face(this.vertices, 22, 35, 26),
                new Face(this.vertices, 26, 34, 27),
                new Face(this.vertices, 27, 32, 20),
                new Face(this.vertices, 36, 39, 37),
                new Face(this.vertices, 32, 37, 33),
                new Face(this.vertices, 33, 39, 35),
                new Face(this.vertices, 39, 41, 35),
                new Face(this.vertices, 41, 42, 40),
                new Face(this.vertices, 38, 43, 39),
                new Face(this.vertices, 35, 40, 34),
                new Face(this.vertices, 34, 42, 38),
                new Face(this.vertices, 45, 46, 44),
                new Face(this.vertices, 47, 50, 46),
                new Face(this.vertices, 51, 48, 50),
                new Face(this.vertices, 49, 44, 48),
                new Face(this.vertices, 44, 55, 48),
                new Face(this.vertices, 47, 49, 51),
                new Face(this.vertices, 53, 59, 55),
                new Face(this.vertices, 50, 52, 46),
                new Face(this.vertices, 46, 53, 44),
                new Face(this.vertices, 48, 61, 50),
                new Face(this.vertices, 58, 57, 56),
                new Face(this.vertices, 54, 56, 52),
                new Face(this.vertices, 55, 58, 54),
                new Face(this.vertices, 52, 57, 53),
                new Face(this.vertices, 62, 64, 60),
                new Face(this.vertices, 50, 63, 54),
                new Face(this.vertices, 54, 62, 55),
                new Face(this.vertices, 55, 60, 48),
                new Face(this.vertices, 64, 67, 65),
                new Face(this.vertices, 61, 67, 63),
                new Face(this.vertices, 67, 69, 63),
                new Face(this.vertices, 69, 70, 68),
                new Face(this.vertices, 66, 71, 67),
                new Face(this.vertices, 63, 68, 62),
                new Face(this.vertices, 62, 70, 66),
                new Face(this.vertices, 1, 3, 2),
                new Face(this.vertices, 3, 7, 6),
                new Face(this.vertices, 7, 5, 4),
                new Face(this.vertices, 5, 1, 0),
                new Face(this.vertices, 6, 4, 0),
                new Face(this.vertices, 3, 1, 5),
                new Face(this.vertices, 9, 11, 10),
                new Face(this.vertices, 11, 15, 14),
                new Face(this.vertices, 15, 13, 12),
                new Face(this.vertices, 12, 13, 9),
                new Face(this.vertices, 14, 12, 8),
                new Face(this.vertices, 11, 9, 13),
                new Face(this.vertices, 17, 19, 18),
                new Face(this.vertices, 19, 23, 22),
                new Face(this.vertices, 23, 21, 20),
                new Face(this.vertices, 21, 17, 16),
                new Face(this.vertices, 16, 25, 27),
                new Face(this.vertices, 19, 17, 21),
                new Face(this.vertices, 25, 29, 31),
                new Face(this.vertices, 22, 26, 24),
                new Face(this.vertices, 18, 24, 25),
                new Face(this.vertices, 20, 32, 33),
                new Face(this.vertices, 30, 31, 29),
                new Face(this.vertices, 26, 30, 28),
                new Face(this.vertices, 27, 31, 30),
                new Face(this.vertices, 24, 28, 29),
                new Face(this.vertices, 34, 38, 36),
                new Face(this.vertices, 22, 33, 35),
                new Face(this.vertices, 26, 35, 34),
                new Face(this.vertices, 27, 34, 32),
                new Face(this.vertices, 36, 38, 39),
                new Face(this.vertices, 32, 36, 37),
                new Face(this.vertices, 33, 37, 39),
                new Face(this.vertices, 39, 43, 41),
                new Face(this.vertices, 41, 43, 42),
                new Face(this.vertices, 38, 42, 43),
                new Face(this.vertices, 35, 41, 40),
                new Face(this.vertices, 34, 40, 42),
                new Face(this.vertices, 45, 47, 46),
                new Face(this.vertices, 47, 51, 50),
                new Face(this.vertices, 51, 49, 48),
                new Face(this.vertices, 49, 45, 44),
                new Face(this.vertices, 44, 53, 55),
                new Face(this.vertices, 47, 45, 49),
                new Face(this.vertices, 53, 57, 59),
                new Face(this.vertices, 50, 54, 52),
                new Face(this.vertices, 46, 52, 53),
                new Face(this.vertices, 48, 60, 61),
                new Face(this.vertices, 58, 59, 57),
                new Face(this.vertices, 54, 58, 56),
                new Face(this.vertices, 55, 59, 58),
                new Face(this.vertices, 52, 56, 57),
                new Face(this.vertices, 62, 66, 64),
                new Face(this.vertices, 50, 61, 63),
                new Face(this.vertices, 54, 63, 62),
                new Face(this.vertices, 55, 62, 60),
                new Face(this.vertices, 64, 66, 67),
                new Face(this.vertices, 61, 65, 67),
                new Face(this.vertices, 67, 71, 69),
                new Face(this.vertices, 69, 71, 70),
                new Face(this.vertices, 66, 70, 71),
                new Face(this.vertices, 63, 69, 68),
                new Face(this.vertices, 62, 68, 70),
            ];
        }
//         public serialize(): Serialization {
//             let serialization: Serialization = super.serialize();
//             serialization.bladeLength = this.bladeLength;
//             serialization.bladeWidth = this.bladeWidth;
//             serialization.handleWidth = this.handleWidth;
//             return serialization;
//         }
//         public async deserialize(_serialization: Serialization): Promise<Serializable> {
//             await super.deserialize(_serialization);
//             this.bladeLength = _serialization.bladeLength;
//             this.bladeWidth = _serialization.bladeWidth;
//             this.handleWidth = _serialization.handleWidth;
//             this.create(this.bladeLength, this.bladeWidth, this.handleWidth);
//             return this;
//         }

        public async mutate(_mutator: Mutator): Promise<void> {
            super.mutate(_mutator);
        }
    }
}