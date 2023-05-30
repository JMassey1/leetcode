public class Solution {
    public static String encode(List<String> strs) {
        return strs.stream().collect(Collectors.joining("0698947049"));
    }

    public static List<String> decode(String str) {
        List<String> strs = new ArrayList<String>(Arrays.asList(str.split("0698947049")));
        return strs;
    }
    
    public static void main(String[] args) {
        String[] example1 = new String[] {"lint", "code", "love", "you"};
        String[] example2 = new String[] {"we", "say", ":", "yes"};
        
        String ex1_enc = encode(Arrays.asList(example1));
        System.out.println(ex1_enc);
        System.out.println(decode(ex1_enc));
        
        System.out.println();
        
        String ex2_enc = encode(Arrays.asList(example2));
        System.out.println(ex2_enc);
        System.out.println(decode(ex2_enc));
    }
}