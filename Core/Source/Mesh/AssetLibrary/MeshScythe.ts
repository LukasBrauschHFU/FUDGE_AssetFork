namespace FudgeCore {

  export class MeshScythe extends MeshMutable {
    public static readonly iSubclass: number = MeshMutable.registerSubclass(MeshScythe);

    public constructor(_name: string = "MeshScythe") {
      super(_name);

      this.vertices = new Vertices(
        new Vertex(new Vector3(-0.120914, 0.025150, 0.036518), new Vector2(0.611982, 1.000000)),
        new Vertex(new Vector3(-0.120914, 0.025150, -0.022831), new Vector2(0.789286, 0.004055)),
        new Vertex(new Vector3(-0.061565, 0.025150, 0.036518), new Vector2(0.515851, 0.000025)),
        new Vertex(new Vector3(-0.061565, 0.025150, -0.022831), new Vector2(0.564196, 0.999912)),
        new Vertex(new Vector3(-0.091240, 0.025150, -0.037668), new Vector2(0.659043, 0.000000)),
        new Vertex(new Vector3(-0.091240, 0.025150, 0.051355), new Vector2(0.743576, 0.000000)),
        new Vertex(new Vector3(-0.135752, 0.025150, 0.006844), new Vector2(0.611982, 0.000000)),
        new Vertex(new Vector3(-0.046728, 0.025150, 0.006844), new Vector2(0.564196, 0.000000)),
        new Vertex(new Vector3(-0.120914, -1.202099, 0.036518), new Vector2(0.540260, 0.000325)),
        new Vertex(new Vector3(-0.120914, -1.202099, -0.022831), new Vector2(0.762488, 0.004966)),
        new Vertex(new Vector3(-0.061565, -1.202099, 0.036518), new Vector2(0.589935, 0.999813)),
        new Vertex(new Vector3(-0.061565, -1.202099, -0.022831), new Vector2(0.632735, 0.000000)),
        new Vertex(new Vector3(-0.091240, -1.202099, -0.037668), new Vector2(0.611982, 0.000187)),
        new Vertex(new Vector3(-0.091240, -1.202099, 0.051355), new Vector2(0.374930, 0.635438)),
        new Vertex(new Vector3(-0.135752, -1.202099, 0.006844), new Vector2(0.789286, 0.970319)),
        new Vertex(new Vector3(-0.046728, -1.202099, 0.006844), new Vector2(0.515851, 0.999575)),
        new Vertex(new Vector3(-0.091240, -1.227828, 0.006844), new Vector2(0.353297, 0.678683)),
        new Vertex(new Vector3(-0.135751, 0.025150, 0.051451), new Vector2(0.564196, 0.000099)),
        new Vertex(new Vector3(-0.135751, 0.072542, 0.019057), new Vector2(0.659043, 0.999884)),
        new Vertex(new Vector3(-0.135751, 0.025150, -0.037763), new Vector2(0.743576, 0.966264)),
        new Vertex(new Vector3(-0.135751, 0.072542, -0.037763), new Vector2(0.331707, 0.613815)),
        new Vertex(new Vector3(-0.046537, 0.025150, 0.051451), new Vector2(0.310073, 0.657060)),
        new Vertex(new Vector3(-0.046537, 0.114364, 0.007756), new Vector2(0.611982, 0.999884)),
        new Vertex(new Vector3(-0.046537, 0.025150, -0.037763), new Vector2(0.564196, 0.999550)),
        new Vertex(new Vector3(-0.046537, 0.114364, -0.037763), new Vector2(0.326277, 0.678683)),
        new Vertex(new Vector3(0.003985, 0.766298, 0.005475), new Vector2(0.540260, 0.999875)),
        new Vertex(new Vector3(-0.008683, 0.751581, 0.002249), new Vector2(0.358727, 0.613815)),
        new Vertex(new Vector3(0.003985, 0.766298, -0.002865), new Vector2(0.762488, 0.971230)),
        new Vertex(new Vector3(-0.008683, 0.751581, -0.002865), new Vector2(0.374919, 0.662466)),
        new Vertex(new Vector3(0.170271, 0.352625, 0.001475), new Vector2(0.589935, 0.000000)),
        new Vertex(new Vector3(0.179028, 0.602906, -0.005253), new Vector2(0.310084, 0.630032)),
        new Vertex(new Vector3(0.074035, 0.730795, 0.000331), new Vector2(0.632735, 0.999884)),
        new Vertex(new Vector3(0.074035, 0.730795, -0.012873), new Vector2(0.343090, 0.646543)),
        new Vertex(new Vector3(0.179028, 0.602906, -0.022385), new Vector2(0.413539, 0.685649)),
        new Vertex(new Vector3(0.170271, 0.352625, -0.033008), new Vector2(0.500001, 0.613815)),
        new Vertex(new Vector3(0.103281, 0.747386, -0.013757), new Vector2(0.731729, 0.722371)),
        new Vertex(new Vector3(0.233205, 0.583434, -0.024993), new Vector2(0.374930, 0.659637)),
        new Vertex(new Vector3(0.233204, 0.285061, -0.035604), new Vector2(0.515851, 0.572161)),
        new Vertex(new Vector3(0.233204, 0.285061, 0.033934), new Vector2(0.263780, 0.755487)),
        new Vertex(new Vector3(0.233204, 0.583434, 0.026461), new Vector2(0.413539, 0.613815)),
        new Vertex(new Vector3(0.103281, 0.747386, 0.010331), new Vector2(0.256726, 0.000000)),
        new Vertex(new Vector3(0.060084, 0.171376, -0.035374), new Vector2(0.659043, 0.722371)),
        new Vertex(new Vector3(0.091706, 0.093041, -0.036678), new Vector2(0.374930, 0.613887)),
        new Vertex(new Vector3(0.060084, 0.171376, 0.000035), new Vector2(0.263780, 0.037949)),
        new Vertex(new Vector3(0.091706, 0.093041, 0.050365), new Vector2(0.310073, 0.755487))
       
      );
      this.faces = [
        new Face(this.vertices, 6, 8, 0),
        new Face(this.vertices, 2, 15, 7),
        new Face(this.vertices, 4, 9, 1),
        new Face(this.vertices, 5, 10, 2),
        new Face(this.vertices, 16, 10, 13),
        new Face(this.vertices, 16, 8, 14),
        new Face(this.vertices, 9, 16, 14),
        new Face(this.vertices, 11, 16, 12),
        new Face(this.vertices, 1, 14, 6),
        new Face(this.vertices, 7, 11, 3),
        new Face(this.vertices, 0, 13, 5),
        new Face(this.vertices, 3, 12, 4),
        new Face(this.vertices, 18, 19, 17),
        new Face(this.vertices, 20, 23, 19),
        new Face(this.vertices, 31, 28, 32),
        new Face(this.vertices, 21, 18, 17),
        new Face(this.vertices, 23, 17, 19),
        new Face(this.vertices, 20, 22, 24),
        new Face(this.vertices, 27, 26, 25),
        new Face(this.vertices, 32, 27, 35),
        new Face(this.vertices, 31, 25, 26),
        new Face(this.vertices, 40, 27, 25),
        new Face(this.vertices, 42, 38, 44),
        new Face(this.vertices, 38, 36, 39),
        new Face(this.vertices, 36, 40, 39),
        new Face(this.vertices, 43, 38, 29),
        new Face(this.vertices, 29, 39, 30),
        new Face(this.vertices, 30, 40, 31),
        new Face(this.vertices, 41, 37, 42),
        new Face(this.vertices, 34, 36, 37),
        new Face(this.vertices, 33, 35, 36),
        new Face(this.vertices, 43, 34, 41),
        new Face(this.vertices, 29, 33, 34),
        new Face(this.vertices, 30, 32, 33),
        new Face(this.vertices, 24, 43, 41),
        new Face(this.vertices, 24, 42, 23),
        new Face(this.vertices, 22, 44, 43),
        new Face(this.vertices, 23, 44, 21),
        new Face(this.vertices, 6, 14, 8),
        new Face(this.vertices, 2, 10, 15),
        new Face(this.vertices, 4, 12, 9),
        new Face(this.vertices, 5, 13, 10),
        new Face(this.vertices, 16, 15, 10),
        new Face(this.vertices, 16, 13, 8),
        new Face(this.vertices, 9, 12, 16),
        new Face(this.vertices, 11, 15, 16),
        new Face(this.vertices, 1, 9, 14),
        new Face(this.vertices, 7, 15, 11),
        new Face(this.vertices, 0, 8, 13),
        new Face(this.vertices, 3, 11, 12),
        new Face(this.vertices, 18, 20, 19),
        new Face(this.vertices, 20, 24, 23),
        new Face(this.vertices, 31, 26, 28),
        new Face(this.vertices, 21, 22, 18),
        new Face(this.vertices, 23, 21, 17),
        new Face(this.vertices, 20, 18, 22),
        new Face(this.vertices, 27, 28, 26),
        new Face(this.vertices, 32, 28, 27),
        new Face(this.vertices, 31, 40, 25),
        new Face(this.vertices, 40, 35, 27),
        new Face(this.vertices, 42, 37, 38),
        new Face(this.vertices, 38, 37, 36),
        new Face(this.vertices, 36, 35, 40),
        new Face(this.vertices, 43, 44, 38),
        new Face(this.vertices, 29, 38, 39),
        new Face(this.vertices, 30, 39, 40),
        new Face(this.vertices, 41, 34, 37),
        new Face(this.vertices, 34, 33, 36),
        new Face(this.vertices, 33, 32, 35),
        new Face(this.vertices, 43, 29, 34),
        new Face(this.vertices, 29, 30, 33),
        new Face(this.vertices, 30, 31, 32),
        new Face(this.vertices, 24, 22, 43),
        new Face(this.vertices, 24, 41, 42),
        new Face(this.vertices, 22, 21, 44),
        new Face(this.vertices, 23, 42, 44)
       

      ];
    }
  }
}