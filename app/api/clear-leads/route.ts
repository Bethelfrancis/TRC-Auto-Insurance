// import { NextRequest, NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase";

// export async function DELETE(request: NextRequest) {
//   try {
//     const { password } = await request.json();
//     const correctPassword = process.env.DASHBOARD_PASSWORD || "trc2025";

//     // Verify password
//     if (password !== correctPassword) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     // Delete all leads
//     const { error } = await supabase
//       .from("leads")
//       .delete()
//       .isNotNull("id");

//     if (error) {
//       console.error("Error clearing leads:", error);
//       return NextResponse.json(
//         { error: "Failed to clear leads" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "All leads cleared successfully"
//     });
//   } catch (error) {
//     console.error("Clear leads error:", error);
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function DELETE(request: NextRequest) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.DASHBOARD_PASSWORD || "trc2025";

    // Verify password
    if (password !== correctPassword) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Delete all leads — neq on a dummy UUID matches every real row safely
    const { error } = await supabase
      .from("leads")
      .delete()
      .neq("id", "00000000-0000-0000-0000-000000000000");

    if (error) {
      console.error("Error clearing leads:", error);
      return NextResponse.json(
        { error: "Failed to clear leads" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "All leads cleared successfully",
    });
  } catch (error) {
    console.error("Clear leads error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}